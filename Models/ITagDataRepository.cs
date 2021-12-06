using System.Collections.Generic;

namespace NotesApp.Models
{
    public interface ITagDataRepository
    {
        public IEnumerable<Tags> GetAllTags { get; }
        public Tags GetTag(int id);
        public Tags CreateTag(Tags tag);
        public void DeleteTag(Tags tag);
    }
}
