namespace NetCoreApi.Model
{
    public class Blog
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Content { get; set; }
        public bool Status { get; set; }
        public bool Active { get; set; }
        public DateTime Date { get; set; }
        public string? ImageUrl { get; set; }

    }
}
