type Props = {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchFilter({
  searchTerm,
  handleSearchChange,
}: Props) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Search..."
    />
  );
}
