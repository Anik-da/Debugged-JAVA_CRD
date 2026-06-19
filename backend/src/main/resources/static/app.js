const API_BASE = window.location.protocol === "file:" 
    ? "http://localhost:8080/api" 
    : "/api";

async function checkHealth() {
    try {
        const res = await fetch(`${API_BASE}/health`);
        if (res.ok) {
            document.getElementById("healthResult").innerText = await res.text();
        } else {
            document.getElementById("healthResult").innerText = "Backend error";
        }
    } catch (err) {
        document.getElementById("healthResult").innerText = "Failed to connect to backend";
    }
}

async function loadProducts() {
    const container = document.getElementById("products");
    container.innerHTML = "Loading...";

    // Clear search box on reset/load
    const searchBox = document.getElementById("searchBox");
    if (searchBox) {
        searchBox.value = "";
    }

    try {
        const res = await fetch(`${API_BASE}/products`);
        if (!res.ok) {
            container.innerHTML = "Failed to load products";
            return;
        }
        const products = await res.json();

        container.innerHTML = products.map(p => `
            <div class="product">
                <h3>${p.name}</h3>
                <p>Price: ₹${p.price}</p>
                <p>Quantity: ${p.quantity}</p>
                <button onclick="deleteProduct(${p.id})">Delete</button>
            </div>
        `).join("");
    } catch (err) {
        container.innerHTML = "Failed to load products";
    }
}

async function addProduct() {
    const nameEl = document.getElementById("name");
    const priceEl = document.getElementById("price");
    const quantityEl = document.getElementById("quantity");

    const name = nameEl.value;
    const price = Number(priceEl.value);
    const quantity = Number(quantityEl.value);

    const body = {
        name,
        price,
        quantity
    };

    try {
        const res = await fetch(`${API_BASE}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        if (!res.ok) {
            alert(await res.text());
            return;
        }

        // Clear fields on success
        nameEl.value = "";
        priceEl.value = "";
        quantityEl.value = "";

        loadProducts();
    } catch (err) {
        alert("Failed to connect to backend to add product");
    }
}

async function deleteProduct(id) {
    try {
        const res = await fetch(`${API_BASE}/products/${id}`, {
            method: "DELETE"
        });

        if (!res.ok) {
            alert(await res.text());
            return;
        }

        loadProducts();
    } catch (err) {
        alert("Failed to connect to backend to delete product");
    }
}

async function searchProducts() {
    const query = document.getElementById("searchBox").value;
    const container = document.getElementById("products");

    try {
        const res = await fetch(`${API_BASE}/products/search?q=${encodeURIComponent(query)}`);
        if (!res.ok) {
            alert(await res.text());
            return;
        }
        const products = await res.json();

        container.innerHTML = products.map(p => `
            <div class="product">
                <h3>${p.name}</h3>
                <p>Price: ₹${p.price}</p>
                <p>Quantity: ${p.quantity}</p>
                <button onclick="deleteProduct(${p.id})">Delete</button>
            </div>
        `).join("");
    } catch (err) {
        container.innerHTML = "Failed to search products";
    }
}

checkHealth();
loadProducts();
