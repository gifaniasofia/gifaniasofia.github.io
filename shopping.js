const listProducts = [
    {
        name: "Whiskas® Pouch Junior 3 Pack",
        price: 35000,
        description: "Dibuat dari ikan pilihan yang segar, bernutrisi dan lezat yang di sukai Kucingmu.",
        category: "junior"
    },
    {
        name: "Whiskas® Dry Junior 450gr",
        price: 36000,
        description: "Untuk menjaga dan meningkatkan sistem imun untuk masa pertumbuhan yang sehat.",
        category: "junior"
    },
    {
        name: "Whiskas® Dry Adult 1+ 1.2kg",
        price: 95500,
        description: "Diformulasikan untuk menjaga kesehatan kulit dan bulu yang indah serta meningkatkan keaktifan kucing.",
        category: "adult"
    },
    {
        name: "Whiskas® Pouch Adult 1 Pack",
        price: 6000,
        description: "Khusus untuk menjaga dan meningkatkan sistem imun untuk masa pertumbuhan yang sehat.",
        category: "adult"        
    },
    {
        name: "Whiskas® Dry Senior 1,1kg",
        price: 100000,
        description: "WHISKAS Senior 7+, khusus diformulasikan untuk menunda efek usia tua.",
        category: "senior"        
    },
    {
        name: "Whiskas® Pouch Senior 7+ 6 Pack",
        price: 50400,
        description: "Dibuat dari ikan pilihan yang segar, bernutrisi dan lezat yang di sukai Kucingmu.",
        category: "senior"        
    },
    {
        name: "PRO PLAN Adult Sterilised/Weight Loss with OPTIRENAL 2,5kg",
        price: 250000,
        description: "PRO PLAN Adult Sterilised/Weight Loss untuk kucing dewasa yang telah disteril/kebiri.",
        category: "adult"        
    },
    {
        name: "PRO PLAN Adult Housecat with OPTIRENAL 2,5kg",
        price: 350000,
        description: "Diformulasikan secara spesifik untuk perawatan kucing rumahan secara sehat.",
        category: "adult"        
    },
    {
        name: "PRO PLAN Adult 7+ with LONGEVIS",
        price: 245000,
        description: "Dapat memperpanjang umur sehat dan meningkatkan kualitas hidup kucing Anda.",
        category: "adult"        
    },
    {
        name: "PRO PLAN Kitten with OPTISTART",
        price: 255000,
        description: "Diformulasi untuk memenuhi kebutuhan anak kucing dari umur 6 minggu sampai 1 tahun.",
        category: "junior"        
    },
    {
        name: "PRO PLAN Cat Kitten Salmon Makanan Basah Anak Kucing 85gr",
        price: 19000,
        description: "Makanan basah Pro Plan untuk anak kucing dengan potongan lembut daging salmon dalam kuah kaldu.",
        category: "junior"        
    },
    {
        name: "PRO PLAN Cat Adult Chicken Makanan Basah Kucing Dewasa 85gr",
        price: 18000,
        description: "Makanan basah Pro Plan untuk kucing dewasa dengan potongan lembut daging ayam dalam kuah kaldu.",
        category: "adult"       
    },
    {
        name: "Royal Canin Kitten Persian 2kg",
        price: 335000,
        description: "ROYAL CANIN® Persian Kitten diformulasikan dengan mempertimbangkan kebutuhan anak kucing Persia Anda.",
        category: "junior"
    },
    {
        name: "Royal Canin Kitten 2kg ",
        price: 303000,
        description: "ROYAL CANIN® Kitten sesuai diberikan untuk anak kucing berusia sampai 12 bulan.",
        category: "junior"        
    },
    {
        name: "Royal Canin Mother & Baby Cat 2kg",
        price: 303000,
        description: "ROYAL CANIN® Mother & Babycat untuk memenuhi kebutuhan nutrisi induk kucing dan anak kucing berusia 1-4 bulan.",
        category: "junior"        
    },
    {
        name: "Royal Canin Indoor Longhair 2kg",
        price: 293000,
        description: "Royal Canin Home Life Indoor Longhair untuk semua kucing dewasa berambut panjang dari 1 - 7 tahun yang tinggal di dalam ruangan.",
        category: "adult"
    },
    {
        name: "Royal Canin Urinary Care 2kg",
        price: 308000,
        description: "ROYAL CANIN® Urinary Care merupakan formula ekslusif untuk menjaga konsentrasi urin cocok untuk kucing senior.",
        category: "senior"
    },
    {
        name: "Royal Canin Adult Persian 2kg",
        price: 314000,
        description: "ROYAL CANIN® Persian Adult mengandung serangkaian nutrisi untuk meningkatkan daya tahan kesehatan kulit dan lapisan rambut tetap terpelihara.",
        category: "adult"
    },
    {
        name: "Royal Canin Hair Skin Care 2kg",
        price: 308000,
        description: "ROYAL CANIN® Hair & Skin Care merupakan kompleks nutrisi eksklusif yang membantu mendukung peran pertahanan kulit.",
        category: "adult"
    },
    {
        name: "Equilibrio Kitten 7,5 Kg",
        price: 463500,
        description: " Makanan Kucing Equilibrio Kitten Cat adalah makanan yang dapat membantu pencernaan, membuat bulu lebih kuat, dan membantu urine agar tidak berbau.",
        category: "junior"        
    },
    {
        name: "Equilibrio Adult Cat Long Hair 1,5kg",
        price: 130000,
        description: "Membantu memelihara kesehatan saluran kemih, mencegah hairballs di saluran pencernaan, dan meningkatkan kesehatan.",
        category: "adult"        
    },
    {
        name: "Equilibrio Adult 7,5 Kg",
        price: 445000,
        description: "Makanan Kucing Equilibrio Adult Cat adalah makanan yang dapat mengontrol ph urine kucing dan merawat gigi kucing",
        category: "adult"        
    },
    {
        name: "Oricat Kitten Hair And Skin 500gr",
        price: 10000,
        description: "Untuk Kucing Kitten (2-12 bulan) dan buatlah hewan peliharaan yang Anda cintai tumbuh sehat dengan sempurna.",
        category: "junior"
    },
    {
        name: "OriCat Adult 1 Kg",
        price: 17450,
        description: "Memperkuat kekebalan tubuh, pertumbuhan pada otot, dan untuk memperbaiki usus.",
        category: "adult"
    },
    {
        name: "Cat Choize Kitten 1 Kg",
        price: 20500,
        description: "Crude Protein: Min.30%, Crude Fat: Min.9%, Crude FIber: Max.4%, Moisture: Max.10%",
        category: "junior"        
    },
    {
        name: "Cleo Adult Tuna 1,2 Kg",
        price: 45000,
        description: "Cleo Adult Tuna untuk kucing dewasa memberikan kombinasi rasa dari daging ayam dan ikan laut segar yang diperkaya dengen nutrisi lengkap dan seimbang.",
        category: "adult"        
    },
    {
        name: "Cat Choize Adult 800gr",
        price: 14700,
        description: "Crude protein: min 27%, Crude fat: min 9%, Crude fiber: max 4%, Moisture: max 10%",
        category: "adult"        
    },
    {
        name: "Wet Food Life Cat Pouch 85 gr",
        price: 4000,
        description: "Premium Cat food untuk kucing dengan komposisi yang terdiri dari ayam & ikan yang mengandung banyak vitamin & mineral.",
        category: "adult"        
    },
    {
        name: "Makanan Kucing Basah Kaleng Kucinta 400 gr All variant",
        price: 13800,
        description: "Makanan basah dari Thailand ini dikemas dalam kemasan kaleng 400 gr yang mengandung Omega 3, Vitamin dan Mineral serta bebas bijirin dan gluten.",
        category: "adult"        
    },
    {
        name: "Susu Kucing Growssy Cat Milk 1 Box",
        price: 37000,
        description: "Memperkuat kekebalan tubuh, pertumbuhan pada otot, dan untuk memperbaiki usus.",
        category: "junior"
    }
]

function formatPrice(value) {
    return `Rp ${value.toLocaleString('id')}`
}

function displayProduct(arrayOfProduct) {
    document.getElementById('content').innerHTML = arrayOfProduct.map(product => 
        `<div class="card">
            <h1 class=>${product.name}</h1>
            <p class="price">${formatPrice(product.price)}</p>
            <p>${product.description}</p>
            <div class="card-actions">
                <button type="button" value="plus" onclick="countAmount('plus');">Add to Cart</button>
                <button type="button" value="minus" onclick="countAmount('minus');">Remove</button>
            </div>
         </div>`
    );
}

function countAmount(action) {
    let num = parseInt(document.getElementById("number").innerHTML, 10);
    switch(action) {
        case 'minus':
            if (num === 0) {
                break;
            }
            num--;
            break;
        case 'plus':
            num++;
            break;
    };
    document.getElementById("number").innerHTML = num;
}

function search() {
    const value = document.getElementById("search_product").value;
    const filteredProduct = listProducts.filter(product => {
        return product.name.toLowerCase().includes(value.toLowerCase());
    });
    displayProduct(filteredProduct);
}

displayProduct(listProducts);


function openForm() {
    document.getElementById("chatForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("chatForm").style.display = "none";
}


function IGWin() {
    let IGWindow = window.open("https://www.instagram.com", "_blank", "width=500, height=500");
}

function FBWin() {
    let FBWindow = window.open("https://www.facebook.com", "_blank", "width=500, height=500");
}

function TWWin() {
    let TWWindow = window.open("https://www.twitter.com", "_blank", "width=500, height=500");
}

function GMWin() {
    let GMWindow = window.open("https://www.gmail.com", "_blank", "width=500, height=500");
}