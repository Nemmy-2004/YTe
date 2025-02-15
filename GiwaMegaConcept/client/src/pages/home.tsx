import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Package, Truck, Globe } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Leading Distribution & Manufacturing Company
            </h1>
            <p className="text-xl mb-8">
              Your trusted partner in distribution of quality biscuits, cookies, snacks, beverages, and renewable energy solutions.
            </p>
            <Link href="/products">
              <Button size="lg">
                View Our Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Package className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                Efficient distribution of quality food products and renewable energy items across Nigeria.
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Truck className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                Production of high-quality food products with state-of-the-art facilities.
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Import & Export</CardTitle>
              </CardHeader>
              <CardContent>
                International trade services connecting quality products to global markets.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
