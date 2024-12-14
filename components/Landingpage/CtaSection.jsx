import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
const CtaSection = () => {
  return (
      <div className="mt-24">
          <Card className="bg-gradient-to-r from-orange-100 to-amber-100">
              <CardContent className="p-12 text-center">
                  <h2 className="text-3xl font-bold text-orange-900 mb-6">
                      Start reflecting on your Journey Today
                  </h2>
                  <p className="text-lg text-orange-700 mb-8 max-w-2xl mx-auto">
                      Join thousands of writers who have already discovered the power of digital 
                      journaling.
                  </p>
                  <Link href="/dashboard">
                      <Button size="lg" className="animate-bounce">
                          Get Started for free
                          <ChevronRight className="ml-2 h-4 w-4"/>
                  </Button>
                  </Link>
              </CardContent>
          </Card>
   </div>
  )
}

export default CtaSection