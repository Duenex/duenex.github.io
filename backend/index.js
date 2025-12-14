import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "DUENEX API OK" });
});

app.post("/crear-pedido", (req, res) => {
  const { producto, plan } = req.body;

  if (!producto || !plan) {
    return res.status(400).json({ success: false });
  }

  // ⚠️ Wompi de prueba (luego se cambia)
  const wompiLink = "https://checkout.wompi.co/p/";

  res.json({
    success: true,
    producto,
    plan,
    link: wompiLink
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Servidor activo en puerto", PORT);
});
