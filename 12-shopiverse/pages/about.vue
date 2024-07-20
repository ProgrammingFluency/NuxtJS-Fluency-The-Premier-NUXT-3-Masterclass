<template>
    <div class="page-body">
        <header>
            <h1>Welcome to Shopiverse</h1>
        </header>
        
        <section class="about-section">
            <h2>About Us</h2>
            <p>Welcome to Shopiverse, your ultimate destination for all your shopping needs. At Shopiverse, we strive to provide you with a seamless and enjoyable shopping experience, offering a wide range of products from various categories.</p>
            <p>Our mission is to connect customers with the products they love, offering high-quality items at competitive prices. Whether you're searching for the latest fashion trends, tech gadgets, home decor, or beauty essentials, you'll find it all here at Shopiverse.</p>
            <p>With a user-friendly interface and secure payment options, shopping with us is convenient and safe. Our dedicated customer support team is always ready to assist you with any inquiries or concerns you may have.</p>
            <p>Thank you for choosing Shopiverse. Happy shopping!</p>
        </section>

        <footer>
            <p>&copy; 2024 Shopiverse. All rights reserved.</p>
        </footer>


    </div>
</template>



<style scoped>
.page-body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
}

header h1 {
    margin: 0;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

nav ul li a.active {
    font-weight: bold;
}

.about-section {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
}

</style>