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
    <>
      <Dialog>
        <DialogTrigger asChild> 
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
      <p>Access Code Sandbox</p>
      <p>
        https://codesandbox.io/p/github/austinm911/shadcn-test/main?file=%2Fapp%2Fpage.tsx%3A11%2C36&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cli7zvu0t000b2e6hile0vcl1%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cli7zvu0t000d2e6hkapwbpwu%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cli7zvu0t000b2e6hile0vcl1%2522%253A%257B%2522id%2522%253A%2522cli7zvu0t000b2e6hile0vcl1%2522%252C%2522activeTabId%2522%253A%2522cli7zxbv100g82e6hluqi3dsk%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cli7zvu0t000a2e6h8gcctuyc%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fapp%252Fpage.tsx%2522%252C%2522id%2522%253A%2522cli7zxbv100g82e6hluqi3dsk%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fcomponents%252Fui%252FMultiselectHeadless.tsx%2522%252C%2522id%2522%253A%2522cli81d2ip00j82e6hfjvrhrel%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522cli81rht2000b2e6hqknpghfw%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fcomponents%252Fui%252Fbutton.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522cli7zvu0t000d2e6hkapwbpwu%2522%253A%257B%2522id%2522%253A%2522cli7zvu0t000d2e6hkapwbpwu%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522cli7zwrwz005y2e6hgy7oyoso%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522cli81eqfz00e22e6hi7gza5ca%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522cli81eqfz00e22e6hi7gza5ca%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D

      </p>
    </>

  )
}
