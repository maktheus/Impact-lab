#include<iostream>
#include<fstream>

using namespace std;

int main()
{
    ofstream fout;
    fout.open("image.ppm");
    while (1)
    {
        cout << "Enter the number of rows: ";
        int rows;
        cin >> rows;

        cout << "Enter the number of columns: ";
        int cols;
        cin >> cols;

        if (rows > 0 && cols > 0)
        {
            fout << "P3\n";
            fout << rows << " " << cols << "\n";
            fout << "255\n";
            for (int i = 0; i < rows; i++)
            {
                int r, g, b;
                cout << "Enter the RGB values for row " << i << ": ";
                cin >> r >> g >> b;
                for (int j = 0; j < cols; j++)
                {
                    fout << r << " " << g << " " << b << " ";
                }
                fout << "\n";
            }
            break;
        }
        else
        {
            cout << "Invalid input. Try again.\n";
        }
    }
    fout.close();
    return 0;
}
