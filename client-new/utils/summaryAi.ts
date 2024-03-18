import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY =
  process.env.API_KEY_GOOGLE_AISTUDIO ||
  "AIzaSyDXLgQbRGShwrTTPkk5-iZmxamCkptBUX8";

const summaryAi = async (category: string, month: string | number) => {
  const genAI = new GoogleGenerativeAI(API_KEY);

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  console.log("run nya jalan");
  console.log(API_KEY, "<<<< API key");
  console.log(month);
  console.log(category);

  const prompt = `Give summary what will we get after ${month} months training ${category}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;

  // return "hehe";
};

export default summaryAi;
