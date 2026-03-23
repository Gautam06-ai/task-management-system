export default function SearchBar({setSearch}){

return(

    <div className="search-bar">
        <input
        placeholder="Search tasks..."
        onChange={(e)=>setSearch(e.target.value)}
        />
    </div>

);

}