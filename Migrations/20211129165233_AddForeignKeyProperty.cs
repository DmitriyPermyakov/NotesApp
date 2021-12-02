using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NotesApp.Migrations
{
    public partial class AddForeignKeyProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "TaskItem",
                columns: new[] { "Id", "DateEnd", "DateStart", "Description", "Remind", "TagsId", "Title" },
                values: new object[] { 1, new DateTime(2021, 2, 23, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2021, 1, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Create the best program in the world", "never", null, "Create new program" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TaskItem",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
