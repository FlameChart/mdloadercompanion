import * as React from "react"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import { Card, CardContent} from "@/components/ui/card.tsx";
import react from "@vitejs/plugin-react";

function BannerArea() {
    return(
        <div id="BannerArea" className="flex flex-warp justify-center align-center h-68 w-full">
            <Carousel opts={{
                align: "center",
                loop: true,
                interval: 1000,
            }}
            className="w-full max-w-4xl"
            >
                <CarouselContent className="-ml-2">
                    {
                        Array.from(Array(6).keys()).map((_, index) => (
                            <CarouselItem key={index} className="pl-3 md:basis-sm lg:basis-md xl:basis-lg">
                                <div className="p-1.5">
                                    <Card>
                                        <CardContent className="flex h-48">
                                            <span className="text-2xl text-bold">{index+1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))
                    }

                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    )
}

export default BannerArea;