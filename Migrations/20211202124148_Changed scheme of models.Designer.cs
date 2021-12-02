﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NotesApp.Models;

namespace NotesApp.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20211202124148_Changed scheme of models")]
    partial class Changedschemeofmodels
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("NotesApp.Models.Tags", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Tags");
                });

            modelBuilder.Entity("NotesApp.Models.TaskItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<DateTime>("DateEnd")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateStart")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<bool>("IsCompleted")
                        .HasColumnType("bit");

                    b.Property<bool>("IsFailed")
                        .HasColumnType("bit");

                    b.Property<string>("Remind")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("TagsId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("Id");

                    b.HasIndex("TagsId");

                    b.ToTable("TaskItem");
                });

            modelBuilder.Entity("NotesApp.Models.TaskItem", b =>
                {
                    b.HasOne("NotesApp.Models.Tags", "Tags")
                        .WithMany()
                        .HasForeignKey("TagsId");

                    b.Navigation("Tags");
                });
#pragma warning restore 612, 618
        }
    }
}
