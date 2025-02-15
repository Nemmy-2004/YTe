import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <p>Shop A1005, The Main Tejuosho Shopping Complex, Surulere, Lagos</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <p>+234 XXX XXX XXXX</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <p>info@giwamega.com</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Office Address</h3>
            <p>House 1, AI Close, Federal Low Cost, Ikorodu, Lagos</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p>&copy; {new Date().getFullYear()} GIWA MEGA CONCEPT COMPANY LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
