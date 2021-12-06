using Microsoft.AspNetCore.Mvc;
using NotesApp.Models;
using System.Collections.Generic;
using System;
using Microsoft.AspNetCore.Http;

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
        public IActionResult GetAllTags()
        {
            IEnumerable<Tags> tags = repository.GetAllTags;
            if(tags == null)
            {
                return NotFound("Not any tags found");
            }

            return Ok(tags);
        }

        [HttpGet("{id}")]
        public IActionResult GetTag(int id)
        {
            Tags tag = repository.GetTag(id);
            if(tag != null)
            {
                return Ok(tag);
            } 
            else
            {
                return NotFound($"Object with id {id} not found");
            }
        }

        [HttpPost]
        public IActionResult CreateTag([FromBody] Tags tag)
        {
            Tags createdTag = repository.CreateTag(tag);
            var routeValue = new { Id = createdTag.Id };
            return CreatedAtAction(nameof(GetTag), routeValue, createdTag);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTag(int id)
        {
            Tags tag = repository.GetTag(id);
            if ( tag != null)
            {
                repository.DeleteTag(tag);
                return Ok();
            } else
            {
                return NotFound($"Object with id {id} not found");
            }
        }
        
    }
}
