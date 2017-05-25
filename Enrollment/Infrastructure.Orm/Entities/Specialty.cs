using System.Data;
using System.Data.SQLite;

namespace Infrastructure.Orm.Entities
{
    public class Specialty
    {
        public DataTable SpecialtySelect(string specName)
        {
            SQLiteConnection conn = new SQLiteConnection("Data Source=pmfi.db; Version=3;");
            conn.Open();
            SQLiteCommand selectCommand = conn.CreateCommand();
            string selectText = "Select Spec.SpecialtyName, Spec.SpecialtyCount"
                + " from Specialty as Spec"
                + " where Spec.SpecialtyName=@Specialty";
            selectCommand.CommandText = selectText;
            selectCommand.Parameters.AddWithValue("@Specialty", specName);
            DataTable specialtyDT = new DataTable();
            specialtyDT.Reset();
            SQLiteDataAdapter selectDA = new SQLiteDataAdapter(selectCommand);
            selectDA.Fill(specialtyDT);
            conn.Close();
            return specialtyDT;
        }

        public DataTable SpecialtySelect()
        {
            SQLiteConnection conn = new SQLiteConnection("Data Source=pmfi.db; Version=3;");
            conn.Open();
            SQLiteCommand selectCommand = conn.CreateCommand();
            string selectText = "Select Spec.SpecialtyID as ID, Spec.SpecialtyName as Name, Spec.SpecialtyCount as Count"
                + " from Specialty as Spec";
            selectCommand.CommandText = selectText;
            DataTable specialtyDT = new DataTable();
            specialtyDT.Reset();
            SQLiteDataAdapter selectDA = new SQLiteDataAdapter(selectCommand);
            selectDA.Fill(specialtyDT);
            conn.Close();
            return specialtyDT;
        }
    }
}
