"use server";
import {streamText} from "ai";
import { createStreamableValue } from "ai/rsc";
import {createGoogleGenerativeAI} from "@ai-sdk/google";
import axios from "axios";
const google= createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY, 
})
export async function chatStream(question: string, projectId: string) {
const stream=createStreamableValue()
const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
  question,
  projectId,
});
(async () => {
    const { textStream } = await streamText({
        model: google("gemini-2.5-flash"),
        prompt: `You are a ai code assistant who answers questions about codebase.Your target audience is technical interns.
        AI assistant is a helpful and knowledgeable assistant who can answer questions about the codebase.
        AI is a well-mannered and polite assistant who always responds in a friendly manner.
        AI have sum of all the context of the codebase and can answer questions about it.
        If the question is asking about code or a specific file , AI will provide detailed answers with code snippets.
    START CONTEXT BLOCK
    ${response.data.context}
    END CONTEXT BLOCK
    START QUESTION BLOCK
    ${question}
    END QUESTION BLOCK
    AI will take into account the context provided and answer the question in a concise and accurate manner.
    AI will always provide a code snippet if the question is asking about code or a specific file

    `
    });
    for await (const chunk of textStream) {
        stream.update(chunk);
    }
    stream.done();
})(); // Close the async IIFE
return{
    output:stream.value,
    result: response.data.results,
}
} // Close the chatStream function