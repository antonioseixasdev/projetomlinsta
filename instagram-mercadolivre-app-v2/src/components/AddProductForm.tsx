import { useState } from "react";
import { addProduct } from "@/services/addProductService";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const AddProductForm = ({ onProductAdded, initialData, onCancel, onEdit }: {
  onProductAdded: () => void;
  initialData?: { id?: string; name: string; description: string };
  onCancel?: () => void;
  onEdit?: (id: string, name: string, description: string) => Promise<void>;
}) => {
  const { user } = useAuth();
  const [name, setName] = useState(initialData?.name || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);
    setError("");
    try {
      if (initialData?.id && onEdit) {
        await onEdit(initialData.id, name, description);
      } else {
        await addProduct(user.uid, name, description);
      }
      setName("");
      setDescription("");
      onProductAdded();
      if (onCancel) onCancel();
    } catch {
      setError("Erro ao salvar produto.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-2 max-w-md">
      <Input label="Nome do Produto" value={name} onChange={e => setName(e.target.value)} required />
      <Input label="Descrição" value={description} onChange={e => setDescription(e.target.value)} required />
      {error && <span className="text-red-500 text-xs">{error}</span>}
      <div className="flex gap-2">
        <Button type="submit" variant="primary" isLoading={loading} disabled={loading}>
          {initialData ? "Salvar Alterações" : "Adicionar Produto"}
        </Button>
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
            Cancelar
          </Button>
        )}
      </div>
    </form>
  );
};

export default AddProductForm;
