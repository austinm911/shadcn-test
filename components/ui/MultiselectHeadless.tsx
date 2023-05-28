"use client"
import { useState } from 'react'
import { cn } from "@/lib/utils"
import { Combobox } from '@headlessui/react'

/* 
    Inspired by 
    - Preview: https://headlessui-react-iyc2p47cm-tailwindlabs.vercel.app/combobox/multi-select
    - Code: https://github.com/tailwindlabs/headlessui/blob/d874e561a1ec4ac65250d76a40cc979cf6983acc/packages/playground-react/pages/combobox/multi-select.tsx#L55-L89
*/

interface Item {
    id: number;
    name: string;
}

interface MultiSelectProps {
    items: Item[];
}


function Multiselect({ items }: MultiSelectProps) {
    let [query, setQuery] = useState('')
    let [activeItems, setActiveItems] = useState<Item[]>([]);

    return (
        <Combobox
            value={activeItems}
            onChange={(item) => setActiveItems(item)}
            name="items"
            multiple
        >
            {/* <Combobox.Label className="block text-sm font-medium leading-5 text-gray-700">
                Label
            </Combobox.Label> */}

            <div className="relative">
                <span className="inline-block w-full rounded-md shadow-sm">
                    <div className="relative w-full py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default focus-within:border-blue-700 focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-700 sm:text-sm sm:leading-5">
                        <span className="flex flex-wrap gap-2">
                            {activeItems.map((item) => (
                                <span
                                    key={item.id}
                                    className="flex items-center gap-1 rounded bg-blue-50 px-2 py-0.5"
                                >
                                    <span>{item.name}</span>
                                    <svg
                                        className="w-4 h-4 cursor-pointer"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            e.preventDefault()
                                            setActiveItems((existing) => existing.filter((i) => i !== item))
                                        }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </span>
                            ))}
                            <Combobox.Input
                                onChange={(event) => setQuery(event.target.value)}
                                onFocus={() => query != '' && setQuery('')}
                                className="z-0 p-0 border-none focus:ring-0"
                                placeholder="Search..."
                            />
                        </span>
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <svg
                                className="w-5 h-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Combobox.Button>
                    </div>
                </span>

                <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg">
                    <Combobox.Options className=" z-[100] py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5">
                        {items
                            .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
                            .map((item) => (
                                <Combobox.Option
                                    key={item.id}
                                    value={item}
                                    className={({ active }) => {
                                        return cn(
                                            'relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none',
                                            active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                        )
                                    }}
                                >
                                    {({ active, selected }) => (
                                        <>
                                            <span
                                                className={cn(
                                                    'block truncate',
                                                    selected ? 'font-semibold' : 'font-normal'
                                                )}
                                            >
                                                {item.name}
                                            </span>
                                            {selected && (
                                                <span
                                                    className={cn(
                                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                                        active ? 'text-white' : 'text-indigo-600'
                                                    )}
                                                >
                                                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                            )}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))}
                    </Combobox.Options>
                </div>
            </div>
        </Combobox>
    )
}

export { Multiselect }