using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesApp.Models
{
    public class TagDataRepository : ITagDataRepository
    {
        private DatabaseContext context;
        public TagDataRepository(DatabaseContext context)
        {
            this.context = context;
        }
        public IEnumerable<Tags> GetAllTags => context.Tags;
        public Tags GetTag(int id)
        {
            return context.Tags.Find(id);
        }
        public Tags CreateTag(Tags newTag)
        {
            newTag.Id = 0;
            context.Tags.Add(newTag);
            
            context.SaveChanges();
            
            return context.Tags.Find(newTag.Id);
        }
        public void DeleteTag(Tags tag)
        {            
            context.Tags.Remove(tag);
            context.SaveChanges();
        }
    }
}
