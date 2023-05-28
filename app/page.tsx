/* eslint-disable tailwindcss/classnames-order */
import Link from "next/link"
import { Multiselect } from "@/components/ui/MultiselectHeadless"
import { siteConfig } from "@/config/site"
import {  Button, buttonVariants } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"


export default function IndexPage() {
  const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
  ]
  return (
    <Dialog>
      <DialogTrigger> 
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <div
          data-testid="header"
          className="flex items-center justify-start h-full gap-2 border-b border-gray-300"
        >
          <h1 className="text-xl font-bold ">
            Relate Records
          </h1>
        </div>
        <Multiselect items={people}/>
        <Multiselect items={people} />
        <Multiselect items={people} />
        <Multiselect items={people} />
      </DialogContent>
    </Dialog>

  )
}
