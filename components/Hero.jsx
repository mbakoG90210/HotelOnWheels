"use client"

import * as React from "react"
import SearchBox from './SearchBox';
import { ChevronsUpDown, Plus, X } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const Hero = () => {

  const [isOpen, setIsOpen] = React.useState(false)
 
  return (
    <section className='pt-48 pb-48 xl:py-0 xl:h-[1087px] bg-hero2 xl:bg-hero bg-cover bg-center bg-no-repeat flex justify-center items-center'>
          <div className='container mx-auto flex items-center justify-center xl:justify-start'>
              <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className=" space-y-2"
              >
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h1 className="text-white text-sm xl:text-xl font-bold">
                    Make Reservations
                  </h1>
                  <CollapsibleTrigger asChild>
                    <Button variant='accent' size="lg">
                      <ChevronsUpDown className="h-7 w-7"/>
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                    <SearchBox />
                </CollapsibleContent>
              </Collapsible>
          </div>
        </section>
        
  );
};

export default Hero;
