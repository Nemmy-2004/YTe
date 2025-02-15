import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About GIWA MEGA CONCEPT</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-6">
            GIWA MEGA CONCEPT COMPANY LTD is a leading distribution and manufacturing company 
            based in Lagos, Nigeria. We specialize in the distribution of quality food products 
            and renewable energy solutions.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            To provide high-quality products and excellent service to our customers while 
            maintaining the highest standards of business ethics and professionalism.
          </p>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Business Address</h3>
              <p>Shop A1005, The Main Tejuosho Shopping Complex,</p>
              <p>Surulere, Lagos</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Registered Address</h3>
              <p>House 1, AI Close,</p>
              <p>Federal Low Cost,</p>
              <p>Ikorodu, Lagos</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
