const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    console.log(phones);
    const res1 = await fetch('https://openapi.programming-hero.com/api/phones?search=samsung');
    const data1 = await res1.json();
    const phones1 = data1.data;
    console.log(phones1);
}

loadPhone()