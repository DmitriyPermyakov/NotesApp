using Microsoft.AspNetCore.Mvc;
using NotesApp.Models;
using System.Collections.Generic;

namespace NotesApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TagController : ControllerBase
    {
        private ITagDataRepository repository;
        public TagController(ITagDataRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public IEnumerable<Tags> GetAllTags() => repository.GetAllTags;

        [HttpPost]
        public void CreateTag(Tags tag)
        {
            repository.CreateTag(tag);
        }

        [HttpDelete("{id}")]
        public void DeleteTag(int id)
        {
            repository.DeleteTag(id);
        }
        
    }
}
