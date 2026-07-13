fetch("./products.json")
  .then((res) => {
    if (!res.ok) throw new Error("خطا در خواندن فایل JSON");
    return res.json();
  })
  .then((data) => {
    const main = document.querySelector("main");
    main.innerHTML = "";

    // محصولات اصلی
    data.products.forEach((product) => {
      const section = document.createElement("section");
      section.className = "product-container";

      const gallery = product.images
        .map(
          (img, index) => `
            <div class="img-box">
              <img src="${img}" alt="${product.title} ${index + 1}">
            </div>
          `,
        )
        .join("");

      section.innerHTML = `
        <h1 class="title">${product.title}</h1>

        <p class="desc">
          ${product.description}
        </p>

        <div class="gallery">
          ${gallery}
        </div>

        <div class="price-box">
          <h2>قیمت</h2>
          <p class="price">
            کیلویی ${product.price.value.toLocaleString("fa-IR")} ${product.price.currency}
          </p>
        </div>
      `;

      main.appendChild(section);
    });

    // سایر محصولات
    const other = data.otherProducts;

    const otherSection = document.createElement("section");
    otherSection.className = "product-container others";

    const otherGallery = other.images
      .map(
        (img) => `
          <div class="img-box">
            <img src="${img}" alt="محصولات باغی">
          </div>
        `,
      )
      .join("");

    otherSection.innerHTML = `
      <h1 class="title">${other.title}</h1>

      <p class="desc">
        ${other.description}
      </p>

      <div class="gallery">
        ${otherGallery}
      </div>
    `;

    main.appendChild(otherSection);
  })
  .catch((err) => {
    console.error(err);
    document.querySelector("main").innerHTML = `
      <h2 style="text-align:center;color:red;">
        خطا در بارگذاری اطلاعات محصولات
      </h2>
    `;
  });
