using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NotesApp.Migrations
{
    public partial class Changedschemeofmodels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TaskItem",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "TaskItem",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "TaskItem",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsCompleted",
                table: "TaskItem",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsFailed",
                table: "TaskItem",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsCompleted",
                table: "TaskItem");

            migrationBuilder.DropColumn(
                name: "IsFailed",
                table: "TaskItem");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "TaskItem",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(30)",
                oldMaxLength: 30,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "TaskItem",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "TaskItem",
                columns: new[] { "Id", "DateEnd", "DateStart", "Description", "Remind", "TagsId", "Title" },
                values: new object[] { 1, new DateTime(2021, 2, 23, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2021, 1, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Create the best program in the world", "never", null, "Create new program" });
        }
    }
}
