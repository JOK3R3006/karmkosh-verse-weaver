
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Plus, X, IndianRupee } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { useToast } from "@/hooks/use-toast";

export default function CreateProduct() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    type: "",
    tags: [],
    files: []
  });
  
  const [currentTag, setCurrentTag] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Product Created!",
      description: "Your product has been successfully created and is pending review.",
    });
  };

  const addTag = () => {
    if (currentTag && !product.tags.includes(currentTag)) {
      setProduct({ ...product, tags: [...product.tags, currentTag] });
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setProduct({ 
      ...product, 
      tags: product.tags.filter(tag => tag !== tagToRemove) 
    });
  };

  return (
    <div className="pb-24 pt-8 md:pt-12">
      <div className="container mx-auto max-w-3xl px-4">
        <BackButton to="/dashboard" className="-ml-2 mb-6" />
        <div className="mb-10">
          <p className="eyebrow mb-4">New product</p>
          <h1 className="display text-5xl text-foreground md:text-6xl">Create New Product</h1>
          <p className="mt-3 text-muted-foreground">Share your knowledge and earn 90% of every sale</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Tell us about your product</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="title">Product Title</Label>
                <Input
                  id="title"
                  placeholder="Enter your product title"
                  value={product.title}
                  onChange={(e) => setProduct({ ...product, title: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what students will learn..."
                  rows={4}
                  value={product.description}
                  onChange={(e) => setProduct({ ...product, description: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="price">Price (₹)</Label>
                  <div className="relative">
                    <IndianRupee className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="price"
                      type="number"
                      min="0"
                      placeholder="2999"
                      className="tabular pl-10"
                      value={product.price}
                      onChange={(e) => setProduct({ ...product, price: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => setProduct({ ...product, category: value })}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="course">Online Course</SelectItem>
                      <SelectItem value="ebook">E-book</SelectItem>
                      <SelectItem value="template">Template</SelectItem>
                      <SelectItem value="software">Software</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Type</CardTitle>
              <CardDescription>Choose how you want to deliver your product</CardDescription>
            </CardHeader>
            <CardContent>
              <Select onValueChange={(value) => setProduct({ ...product, type: value })}>
                <SelectTrigger aria-label="Delivery method">
                  <SelectValue placeholder="Select delivery method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="download">Digital Download</SelectItem>
                  <SelectItem value="course">Video Course</SelectItem>
                  <SelectItem value="membership">Membership Access</SelectItem>
                  <SelectItem value="service">Service/Consulting</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
              <CardDescription>Add tags to help people find your product</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  aria-label="Tag"
                  placeholder="Add a tag"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                />
                <Button type="button" variant="outline" onClick={addTag} size="icon" className="h-11 w-11 shrink-0" aria-label="Add tag">
                  <Plus />
                </Button>
              </div>
              {product.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1.5 rounded-full border border-brand-rose/25 bg-brand-rose/10 py-1 pl-3 pr-2 text-sm text-brand-rose"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        aria-label={`Remove ${tag}`}
                        className="rounded-full p-0.5 transition-colors hover:bg-brand-rose/20"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upload Files</CardTitle>
              <CardDescription>Upload your course materials, videos, or downloadable content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center transition-colors hover:border-brand-rose/40">
                <div className="icon-tile mx-auto mb-5 h-14 w-14 rounded-2xl">
                  <Upload className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <p className="font-medium text-foreground">Drag & drop files here, or click to browse</p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Supports: MP4, PDF, ZIP, PNG, JPG (Max 100MB per file)
                </p>
                <Button type="button" variant="outline" className="mt-6">
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" size="lg">
              Save Draft
            </Button>
            <Button type="submit" size="lg">
              Publish Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
