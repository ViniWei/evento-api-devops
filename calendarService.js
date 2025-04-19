const urlEvents = "http://apicalendario:3000/calendar/id/";

const getDate = async(id) => {
    const response = await fetch(urlEvents + id)
    console.log(urlEvents + id);

    if (!response.ok) {
       throw new Error(`Response status: ${response.status}`); 
    }

    return await response.json();
};

export default { getDate }
