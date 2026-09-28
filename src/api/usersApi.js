const baseURL = "https://ggoxncimrywupljnjvuz.supabase.co/rest/v1/users";
const apiKey = "sb_publishable_H3KNXiPjTSLequcG7Isvkw_zWGrOK7D";

export async function fetchUsers() {
    const response = await fetch(baseURL, {
        headers: {
            apikey: apiKey,
        },
    });

    const data = await response.json();
    return data;
}