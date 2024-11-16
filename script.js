const element = document.querySelector("tbody");

const getMethod = async () => {
    try {
        let res = await fetch("https://northwind.vercel.app/api/suppliers");

        let elementData = await res.json();

        element.innerHTML = "";

        elementData.forEach(suppliers => {
            
            element.innerHTML += `
            <td>${suppliers.id}</td>
            <td>${suppliers.companyName}</td>
            <td>${suppliers.contactName}</td>
            <td>${suppliers.contactTitle}</td>

            `
        });
    } catch (err) {
        console.log(err, "checking your code!");
        
    }
}
getMethod()