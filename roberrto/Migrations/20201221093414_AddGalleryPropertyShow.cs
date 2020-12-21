using Microsoft.EntityFrameworkCore.Migrations;

namespace roberrto.Migrations
{
    public partial class AddGalleryPropertyShow : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Show",
                table: "Gallery",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Show",
                table: "Gallery");
        }
    }
}
