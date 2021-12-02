using System.Collections.Generic;


namespace NotesApp.Models
{
    public interface ITagDataRepository
    {
        public IEnumerable<Tags> GetAllTags { get; }
        public void CreateTag(Tags tag);
        public void DeleteTag(int id);
    }
}
