var customer = {
    name: "Arianna",
    surname: "Toitonova",
    fatherName: "Olegovna",
    isResident: true,
    id: 11112,
    birthDate: null,
    type: 1,
    sex: true,
    passport: {
        series: "ID",
        documentNo: "12345",
        expiryDate: "01-01-2025",
        issueDate: "01-01-2015",
    }
};
console.log(
    "Пол клиента:",
    customer.sex === true ? "Парень" : "Девушка"
);
console.log(
    "Тип клиента:",
    customer.type === 1 ? "Физическое лицо" : "Юридическое лицо "
);
