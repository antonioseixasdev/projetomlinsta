"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getUserProducts } from "@/services/productsService";
import { Card } from "@/components/ui/Card";
import { deleteProduct } from "@/services/deleteProductService";
import { Button } from "@/components/ui/Button";
import { editProduct } from "@/services/editProductService";
import AddProductForm from "@/components/AddProductForm";
import { Modal } from "@/components/ui/Modal";
import { Toast } from "@/components/ui/Toast";

const ProductsList = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [editProductData, setEditProductData] = useState<any | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [toast, setToast] = useState<{ message: string; type?: "success" | "error" | "info" | "warning" } | null>(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"az" | "za">("az");

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    getUserProducts(user.uid)
      .then(setProducts)
      .finally(() => setLoading(false));
  }, [user]);

  const filteredProducts = products.filter(
    (product) =>
      product.name?.toLowerCase().includes(search.toLowerCase()) ||
      product.description?.toLowerCase().includes(search.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const nameA = a.name?.toLowerCase() || "";
    const nameB = b.name?.toLowerCase() || "";
    if (sortOrder === "az") return nameA.localeCompare(nameB);
    return nameB.localeCompare(nameA);
  });

  if (!user) return <p className="text-center">Faça login para ver seus produtos.</p>;
  if (loading) return <p className="text-center animate-pulse">Carregando produtos...</p>;
  if (products.length === 0) return <p className="text-center">Nenhum produto encontrado.</p>;

  return (
    <>
      <div className="mb-6 max-w-md flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full px-3 py-2 rounded border border-gray-300 dark:border-cinza-fundo-dark bg-white dark:bg-cinza-elemento-dark text-texto-base-light dark:text-texto-base-dark focus:outline-none focus:ring-2 focus:ring-areia-light dark:focus:ring-areia-dark"
        />
        <select
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value as "az" | "za")}
          className="mt-2 sm:mt-0 px-3 py-2 rounded border border-gray-300 dark:border-cinza-fundo-dark bg-white dark:bg-cinza-elemento-dark text-texto-base-light dark:text-texto-base-dark focus:outline-none focus:ring-2 focus:ring-areia-light dark:focus:ring-areia-dark"
        >
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {sortedProducts.map((product) => (
          <Card key={product.id}>
            <h3 className="font-bold text-lg mb-2">{product.name || 'Produto sem nome'}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{product.description || 'Sem descrição.'}</p>
            <div className="flex gap-2 mt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setEditProductData(product);
                  setShowEditModal(true);
                }}
              >
                Editar
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={async () => {
                  await deleteProduct(product.id);
                  setProducts(products => products.filter(p => p.id !== product.id));
                  setToast({ message: "Produto excluído com sucesso!", type: "success" });
                }}
              >
                Excluir
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <AddProductForm
        onProductAdded={() => {
          setToast({ message: "Produto adicionado com sucesso!", type: "success" });
          // Atualize a lista de produtos após adicionar
          if (user) {
            setLoading(true);
            getUserProducts(user.uid)
              .then(setProducts)
              .finally(() => setLoading(false));
          }
        }}
      />

      <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)} title="Editar Produto">
        <AddProductForm
          initialData={editProductData}
          onProductAdded={() => {
            setShowEditModal(false);
            setProducts(products =>
              products.map(p =>
                p.id === editProductData.id
                  ? { ...p, name: editProductData.name, description: editProductData.description }
                  : p
              )
            );
            setToast({ message: "Produto editado com sucesso!", type: "success" });
          }}
          onCancel={() => {
            setShowEditModal(false);
            setToast({ message: "Edição cancelada.", type: "info" });
          }}
          onEdit={async (id, name, description) => {
            await editProduct(id, name, description);
            setProducts(products =>
              products.map(p =>
                p.id === id ? { ...p, name, description } : p
              )
            );
          }}
        />
      </Modal>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default ProductsList;
