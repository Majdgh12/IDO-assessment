namespace BackEnd.Models
{
    public class Task
    {
        public int id { get; set; }

        public string name { get; set; }

        public string category { get; set; }

        public string dueDate { get; set; }

        public string estimate { get; set; }

        public string importance { get; set; }

        public string status { get; set; }

        public int userId { get; set; }

    }
}
