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
        public void CreateTag(Tags newTag)
        {
            newTag.Id = 0;
            context.Add(newTag);
            context.SaveChanges();
        }
        public void DeleteTag(int id)
        {            
            context.Tags.Remove(new Tags { Id = id });
            context.SaveChanges();
        }
    }
}
