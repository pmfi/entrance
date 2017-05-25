using System.Data;
using System.Data.SQLite;

namespace Infrastructure.Orm.Entities
{
    public class Achievements
    {
        public DataTable AchievementSelect()
        {
            SQLiteConnection conn = new SQLiteConnection("Data Source=pmfi.db; Version=3;");
            conn.Open();
            SQLiteCommand selectCommand = conn.CreateCommand();
            string selectText = "select A.AchievementName"
            + " from Achievements as A";
            selectCommand.CommandText = selectText;
            DataTable achievementsDT = new DataTable();
            achievementsDT.Reset();
            SQLiteDataAdapter selectDA = new SQLiteDataAdapter(selectCommand);
            selectDA.Fill(achievementsDT);
            conn.Close();
            return achievementsDT;
        }
    }
}
