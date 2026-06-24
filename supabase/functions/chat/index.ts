import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const SYSTEM_PROMPT = `You are KarmBot, the friendly in-app assistant for KarmKosh, a digital creator marketplace.

Your main job is to help users navigate and understand the app. Be concise, warm, and practical.

App facts you can rely on:
- KarmKosh is a marketplace where creators sell digital products and visitors can browse and buy them.
- It is early-stage: there is currently one creator and one product (the "Balance Boost Blueprint"). Do not invent extra products, creators, reviews, or stats.

Pages and where to find things (use these exact routes when guiding users):
- Home: "/" — overview of KarmKosh, how it works, and FAQs.
- Marketplace: "/marketplace" — browse available digital products.
- Product details: open a product from the Marketplace to see "/product/<id>".
- Creators: "/creators" — learn about creators on the platform.
- Pricing: "/pricing" — plans and pricing details.
- Sign in / Sign up: "/auth" — account access, including Google sign-in.
- Buyer Dashboard: "/dashboard" — a signed-in buyer's purchases.
- Creator Dashboard: "/creator-dashboard" — for creators to manage their work.
- Create a product: "/create-product" — creators add a new product.

Guidance rules:
- When a user wants to do something, tell them which page/menu to go to and what to click.
- If asked something you don't know or that isn't part of the app, say so honestly instead of guessing.
- Keep answers short (a few sentences). Use simple steps or bullets when helpful.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "AI is not configured." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages must be an array" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        stream: true,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
    });

    if (response.status === 429) {
      return new Response(JSON.stringify({ error: "Rate limit reached. Please try again shortly." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (response.status === 402) {
      return new Response(
        JSON.stringify({ error: "AI usage limit reached. Please add credits to continue." }),
        { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    if (!response.ok) {
      const text = await response.text();
      return new Response(JSON.stringify({ error: "AI gateway error", detail: text }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
