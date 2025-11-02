import { useState } from "react";
import { ArrowLeft, CreditCard, Wallet, Lock, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Alert, AlertDescription } from "./ui/alert";

interface Product {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  condition: "Excellent" | "Good" | "Fair";
  category: string;
  seller?: {
    name: string;
  };
}

interface PaymentPageProps {
  product: Product;
  onBack: () => void;
  onComplete: () => void;
}

export function PaymentPage({ product, onBack, onComplete }: PaymentPageProps) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const shippingFee = 50;
  const tax = product.price * 0.08;
  const total = product.price + shippingFee + tax;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally process the payment
    onComplete();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Product
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <Card className="p-6">
              <h2 className="mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Delivery Address */}
            <Card className="p-6">
              <h2 className="mb-4">Delivery Address</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="123 Main Street"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="Portland"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      placeholder="OR"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      placeholder="97201"
                      required
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Payment Method */}
            <Card className="p-6">
              <h2 className="mb-4">Payment Method</h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                      <CreditCard className="h-5 w-5" />
                      Credit / Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Wallet className="h-5 w-5" />
                      PayPal
                    </Label>
                  </div>
                </div>
              </RadioGroup>

              {paymentMethod === "card" && (
                <div className="mt-6 space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <Input
                      id="cardNumber"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardName">Cardholder Name *</Label>
                    <Input
                      id="cardName"
                      value={formData.cardName}
                      onChange={(e) => handleInputChange("cardName", e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date *</Label>
                      <Input
                        id="expiryDate"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange("cvv", e.target.value)}
                        placeholder="123"
                        type="password"
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "paypal" && (
                <Alert className="mt-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    You will be redirected to PayPal to complete your purchase securely.
                  </AlertDescription>
                </Alert>
              )}
            </Card>

            {/* Security Notice */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Lock className="h-4 w-4" />
              <span>Your payment information is secure and encrypted</span>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="p-6 sticky top-24">
              <h2 className="mb-4">Order Summary</h2>
              
              {/* Product Info */}
              <div className="flex gap-4 mb-6">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <ImageWithFallback
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="line-clamp-2 mb-1">{product.title}</h4>
                  <p className="text-muted-foreground text-sm">
                    Sold by {product.seller?.name || "Seller"}
                  </p>
                </div>
              </div>

              <Separator className="my-4" />

              {/* Price Breakdown */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Item Price</span>
                  <span>${product.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${shippingFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <Button 
                className="w-full mt-6 gap-2" 
                size="lg"
                onClick={handleSubmit}
              >
                <Lock className="h-4 w-4" />
                Complete Purchase
              </Button>

              <p className="text-muted-foreground text-xs text-center mt-4">
                By completing this purchase, you agree to our Terms of Service and Privacy Policy
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
