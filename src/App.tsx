import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { invoke } from '@tauri-apps/api/core'
import './App.css'
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarFooter,
} from './components/ui/sidebar'

function App() {
    const [greetMsg, setGreetMsg] = useState('')
    const [name, setName] = useState('')

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
        setGreetMsg(await invoke('greet', { name }))
    }

    return (
        <div className="flex h-screen">
            <Sidebar>
                <SidebarHeader>MDLoader Companion</SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>Example Group 1</SidebarGroup>
                    <SidebarGroup>Example Group 2</SidebarGroup>
                </SidebarContent>
                <SidebarFooter>Example Footer Label</SidebarFooter>
            </Sidebar>
            <main className="flex-grow container"></main>
        </div>
    )
}

export default App
