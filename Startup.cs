using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NotesApp.Models;
using Microsoft.OpenApi.Models;



namespace NotesApp
{
    public class Startup
    {
        private readonly string localhostConnection = "localhostConnection";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }        
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            string connectionString = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<DatabaseContext>(options => options.UseSqlServer(connectionString));
            services.AddTransient<ITaskDataRepository, TaskDataRepository>();
            services.AddTransient<ITagDataRepository, TagDataRepository>();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "NotesApp", Version = "v1" });
            });

            services.AddCors(options =>
            {
                options.AddPolicy(name: localhostConnection, builder => builder.WithOrigins("http://localhost:3000"));
            });
        }
        
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            
            app.UseRouting();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Notes App v1");
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                
            }
            app.UseCors();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers().RequireCors(localhostConnection);
            });
        }
    }
}
