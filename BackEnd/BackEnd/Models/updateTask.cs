namespace BackEnd.Models
{
   
    
        public class updateTask
        {
            public int id { get; set; }
            public string fieldToUpdate { get; set; }
            public string newContent { get; set; }
            public updateTask(int id, string fieldToUpdate, string newContent)
            {
                this.id = id;
                this.fieldToUpdate = fieldToUpdate;
                this.newContent = newContent;
            }
        }
    
}
