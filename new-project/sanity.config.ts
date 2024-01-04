import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schema from "./sanity/schemas/index";
import { visionTool } from '@sanity/vision';
import {codeInput} from '@sanity/code-input'


const config = defineConfig({
    projectId: "qnt16b0i",
    dataset: "production",
    title: "my personal blog",
    apiVersion: "2022-03-07",
    basePath: "/admin",
    plugins: [
        deskTool(),
        visionTool(),
        codeInput()      
    ],

    schema: { types: schema },
});
export default config;