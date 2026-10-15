using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public interface Mobs
    {
        public string Get_stats();
    }
    public class Ork : Mobs
    {
        public int HP { get; set; } = 200;
        public int Damage { get; set; } = 15;

        public string Get_stats()
        {
            return $"Ork: Health: {HP}, Damage:{Damage}";
        }
    }

    public class Elf : Mobs
    {
        public int HP { get; set; } = 80;

        public int Damage { get; set; } = 25;

        public string Get_stats()
        {
            return $"Elf: Health: {HP}, Damage:{Damage}";
        }
    }
 static void Main(string[] args)
    {
        System.Console.WriteLine($"появился {Elf}");
    }
}
