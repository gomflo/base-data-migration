// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    data: {
      userId: "000001",
      userName: "NEWTON",
      name: "Victor Hugo",
      lastName: "Gomez",
      mothersName: "Flores",
      isEnable: true,
      isMigrated: false,
      isCaptureConfirmation: true,
      useGeolocation: true,
      useOnDigital: true,
      authorizationLimit: 2,
      role: "administrador",
      product: "Base MX",
      accessOptionid: "",
      email: {
        email: "victor@base.com",
        type: "empresarial",
      },
      address: {
        addressId: "1",
        street: "Avenida independencia",
        numberExterior: 90,
        numberInterior: 45,
        neighborhood: "Cumbres Del Valle",
        city: "Monterrey",
        state: "Nuevo León",
        country: "México",
        postalCode: 64650,
      },
    },
    message: "Successfully response",
    errors: null,
  });
}
