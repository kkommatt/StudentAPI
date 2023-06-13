using Microsoft.EntityFrameworkCore;
using StudentAPI;
internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddRazorPages();
        builder.Services.AddDbContext<StudentAPIContext>(option => option.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
        builder.Services.AddControllersWithViews().AddNewtonsoftJson(options =>
        {
            options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
        });
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowAngularLocalhost",
                builder =>
                {
                    builder.WithOrigins("https://127.0.0.1:4200")
                           .AllowAnyHeader()
                           .AllowAnyMethod();
                });
        });

        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();
        app.UseStaticFiles();

        app.UseDefaultFiles();
        app.UseStaticFiles();
        app.UseCors("AllowAngularLocalhost");
        app.UseRouting();
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        }
        );
        app.UseAuthorization();


        app.MapControllers();

        app.Run();
    }
}