import { ArrowLeft, Star, MapPin, Calendar, Package, MessageCircle, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  condition: "Excellent" | "Good" | "Fair";
  category: string;
}

interface UserProfile {
  id: string;
  name: string;
  avatar?: string;
  memberSince: string;
  rating: number;
  totalReviews: number;
  location: string;
  bio: string;
  verified: boolean;
  activeListings: number;
  totalSales: number;
  responseRate: number;
  responseTime: string;
}

interface Review {
  id: string;
  reviewerName: string;
  reviewerAvatar?: string;
  rating: number;
  date: string;
  comment: string;
  productTitle: string;
}

interface UserProfilePageProps {
  user: UserProfile;
  userProducts: Product[];
  reviews: Review[];
  onBack: () => void;
  onProductClick: (id: string) => void;
}

export function UserProfilePage({
  user,
  userProducts,
  reviews,
  onBack,
  onProductClick,
}: UserProfilePageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Profile Header */}
        <Card className="p-6 md:p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <Avatar className="h-24 w-24 md:h-32 md:w-32">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-2xl">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-start gap-3 mb-3">
                <h1 className="flex-1 min-w-[200px]">{user.name}</h1>
                {user.verified && (
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 gap-1">
                    <Shield className="h-3 w-3" />
                    Verified
                  </Badge>
                )}
              </div>

              <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>
                    {user.rating.toFixed(1)} ({user.totalReviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Member since {user.memberSince}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{user.bio}</p>

              <Button className="gap-2">
                <MessageCircle className="h-4 w-4" />
                Contact Seller
              </Button>
            </div>
          </div>

          {/* Stats */}
          <Separator className="my-6" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-muted-foreground text-sm mb-1">Active Listings</div>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-primary" />
                <span className="text-2xl">{user.activeListings}</span>
              </div>
            </div>
            <div>
              <div className="text-muted-foreground text-sm mb-1">Total Sales</div>
              <span className="text-2xl">{user.totalSales}</span>
            </div>
            <div>
              <div className="text-muted-foreground text-sm mb-1">Response Rate</div>
              <span className="text-2xl">{user.responseRate}%</span>
            </div>
            <div>
              <div className="text-muted-foreground text-sm mb-1">Response Time</div>
              <span className="text-2xl">{user.responseTime}</span>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="listings" className="w-full">
          <TabsList className="w-full md:w-auto mb-6">
            <TabsTrigger value="listings">
              Active Listings ({userProducts.length})
            </TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* Listings Tab */}
          <TabsContent value="listings">
            {userProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {userProducts.map((product) => (
                  <div key={product.id} onClick={() => onProductClick(product.id)} className="cursor-pointer">
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="mb-2">No active listings</h3>
                <p className="text-muted-foreground">
                  This seller doesn't have any active listings at the moment.
                </p>
              </Card>
            )}
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <div className="space-y-4">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <Card key={review.id} className="p-6">
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={review.reviewerAvatar} />
                        <AvatarFallback>
                          {review.reviewerName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span>{review.reviewerName}</span>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i < review.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-muted-foreground text-sm">
                              Purchased: {review.productTitle}
                            </p>
                          </div>
                          <span className="text-muted-foreground text-sm">{review.date}</span>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="p-12 text-center">
                  <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="mb-2">No reviews yet</h3>
                  <p className="text-muted-foreground">
                    This seller hasn't received any reviews yet.
                  </p>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* About Tab */}
          <TabsContent value="about">
            <Card className="p-6">
              <h2 className="mb-4">About {user.name}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2">Bio</h3>
                  <p className="text-muted-foreground">{user.bio}</p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3">Seller Statistics</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Member Since</span>
                      <span>{user.memberSince}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Location</span>
                      <span>{user.location}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Active Listings</span>
                      <span>{user.activeListings}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Total Sales</span>
                      <span>{user.totalSales}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Average Rating</span>
                      <span className="flex items-center gap-1">
                        {user.rating.toFixed(1)}
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Response Rate</span>
                      <span>{user.responseRate}%</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Avg Response Time</span>
                      <span>{user.responseTime}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Verified Seller</span>
                      <span>{user.verified ? "Yes" : "No"}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3">Safety Tips</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Always meet in a public place for transactions</li>
                    <li>• Inspect items before making payment</li>
                    <li>• Use secure payment methods</li>
                    <li>• Report suspicious activity to ReBuild</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
