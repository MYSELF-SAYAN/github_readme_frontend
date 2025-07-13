import axios from "axios";
import { auth } from "@clerk/nextjs/server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getProjects = async () => {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("User ID is required");
    }

    const response = await axios.get(`${baseUrl}/project/list`, {
      data: { userId },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
// export const createProject = async (projectData: {
//   repoUrl: string;
//   name: string;
//   token: string;
// }) => {
//   try {
//     const { userId } = await auth();
//     if (!userId) {
//       throw new Error("User ID is required");
//     }
//     const response = await axios.post(`${baseUrl}/project/create`, {
//       data: { ...projectData, userId },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching projects:", error);
//     throw error;
//   }
// };
