export async function readData(){

    const basePath = 'https://jsonplaceholder.typicode.com';
    const endPoint = `${basePath}/comments`;

try {

    const response = await fetch(endPoint);
    return response.json();

} catch (error) {

    throw (error);

}

}